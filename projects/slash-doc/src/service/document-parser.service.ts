import {Injectable} from '@angular/core';
import * as marked from 'marked';

export class Document {
  content: string;
  api: string;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentParserService {

  constructor() {

  }

}
