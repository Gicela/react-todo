var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=> {
    it('Should exist', ()=> {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', ()=>{
        beforeEach( ()=> {
            localStorage.removeItem('todos');
        }),

        it('Should set valid todos array', ()=> {
            var todos = [{
                id: 23,
                text: 'test all files',
                completed: false
            }];
            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });
    
        it('Should not set invalid todos array', ()=> {
            var badTodos = {a: 'b'};
            TodoAPI.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);
        }); 
    });


    describe('getTodos', ()=>{
         it('Should return empty array for bad localstorage data', ()=> {
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);

        }); 

        it('Should return todo if valid array in localStorage', ()=> {
                var todos = [{
                id: 23,
                text: 'test all files',
                completed: false
            }];  
            localStorage.setItem('todos', JSON.stringify(todos));

            var actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos);
        }) ;     
    });
});