import { TestBed } from '@angular/core/testing'

import { TodoService } from './services/todo.service'

describe('TodoService', () => {
  let service: TodoService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(TodoService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
