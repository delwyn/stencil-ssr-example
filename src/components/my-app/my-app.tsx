import { Component, h } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {
  handleEvent = (event: MouseEvent) => {
    console.log('MyApp.handleEvent', this, event)
  }

  render() {
    return [
      <div class="page-header">
        <h1>Welcome to Stencil Starter</h1>
        <button onClick={(event: MouseEvent) => this.handleEvent(event)}>
          Does not work in SSR
        </button>
        <button onClick={this.handleEvent}>Does not work in SSR</button>
      </div>,
      <nav class="page-nav">
        <stencil-route-link url="/">Home</stencil-route-link>
        <stencil-route-link url="/page-1">Page 1</stencil-route-link>
        <stencil-route-link url="/page-2">Page 2</stencil-route-link>
      </nav>,
      <stencil-router>
        <stencil-route url="/" component="home-page" exact={true} />
        <stencil-route url="/page-1" component="page-1" />
        <stencil-route url="/page-2" component="page-2" />
      </stencil-router>
    ];
  }
}
