import Teacher, { promote } from './teacher';
import React, { Component } from 'react';

// default -> import ... from '';
// Named -> import { ... } from '';

// const person = new Person('Wayne');

const teacher = new Teacher('Wayne2', 'Software Engineering');
teacher.teach();
