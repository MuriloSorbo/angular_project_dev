import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const baseURL = window.location.href

@Injectable()

export class BlogService {
  getUrl: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor() { }
}
