"use strict";



//  I M P O R T

import { Controller } from "stimulus";



//  E X P O R T

export default class extends Controller {
  connect() {
    this.element.textContent = "It works!";
  }
}
