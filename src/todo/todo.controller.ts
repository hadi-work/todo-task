import { Body, Controller, Get, Post, Put, Delete, Param, Res, Request, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { AuthGuard } from "@nestjs/passport";
import {Req} from "@nestjs/common/decorators/http/route-params.decorator";

@UseGuards(AuthGuard("jwt"))
@Controller('todo')
export class TodoController {

  constructor(private readonly todoService: TodoService) {}

  @Get('/getAll')
  async getAll(@Req() req, @Res() res) {
    try {
      res.status(200).send({
        code: 200,
        status: 'Success',
        data: await this.todoService.findAll(req.user.id),
      });
    } catch (err) {
      res.status(400).send({
        status: 'ERROR',
        message: err.message,
      });
    }
  }

  @Post('/create')
  createTodo(@Body() body, @Res() res, @Req() req) {
    if (!body.title) {
      res.status(422).send({
        code: 422,
        status: 'Validation error',
        message: 'Please provide title',
      });
      return;
    }
    if (!body.description) {
      res.status(422).send({
        code: 422,
        status: 'Validation error',
        message: 'Please provide description',
      });
      return;
    }

    try {

      this.todoService.create({...body, user_id:req.user.id});
      res.status(201).send({
        code: 201,
        status: 'Success',
        message: 'Record created successfully',
        data: [
            body,
        ],
      });
    } catch (err) {
      res.status(400).send({
        status: 'ERROR',
        message: err.message,
      });
    }
  }

  @Put(':id')
  update(@Param('id') id, @Body() body, @Res() res, @Req() req) {
    if (!body.title) {
      res.status(422).send({
        code: 422,
        status: 'Validation error',
        message: 'Please provide title',
      });
      return;
    }
    if (!body.description) {
      res.status(422).send({
        code: 422,
        status: 'Validation error',
        message: 'Please provide description',
      });
      return;
    }

    try {
      this.todoService.update(id, body.title,  body.description, req.user.id);
      res.status(200).send({
        code: 200,
        status: 'Success',
        message: 'Record updated successfully'
      });
    } catch (err) {
      res.status(400).send({
        status: 'ERROR',
        message: err.message,
      });
    }
  }

  @Delete(':id')
  remove(@Param('id') id, @Res() res, @Req() req) {
    try {
      this.todoService.remove(id, req.user.id);
      res.status(200).send({
        code: 200,
        status: 'Success',
        message: 'Record deleted successfully'
      });
    } catch (err) {
      res.status(400).send({
        status: 'ERROR',
        message: err.message,
      });
    }
  }
}
