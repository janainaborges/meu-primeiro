/* eslint-disable no-undef */
/* eslint-disable import/no-anonymous-default-export */

import React from 'react'
import { Button } from '../Button/Button';

export default class extends pdf {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }
  render() {
    return (
        <a href="./cv1.pdf" download>
            {" "}
            <Button className="btns" buttonStyle="btn--test">
                {" "}
                Currículo{" "}
            </Button>
        </a>
    );}}

pdf();