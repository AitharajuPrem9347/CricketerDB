package com.example1.demo.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Cound not found the user with id : "+id);
    }
}
