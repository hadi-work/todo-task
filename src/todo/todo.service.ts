import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { Req } from '@nestjs/common/decorators/http/route-params.decorator';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>
  ) {}

  // get data from db
  findAll(user_id) {
    return this.todoRepository.find({
      where:{
        user_id: user_id
      }
    });
  }

  create(todo) {
    this.todoRepository.save(todo);
  }

  update(id: number, title: string, description: string, user_id: number) {
    this.todoRepository.update({id:id, user_id:user_id}, { title, description, user_id});
  }

  remove(id: number, user_id: number) {
    this.todoRepository.delete({id: id, user_id:user_id});
  }
}
