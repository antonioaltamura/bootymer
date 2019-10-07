/**
 * Created by Antonio Altamura on 07/10/2019.
 */
import {LitElement, html} from './web_modules/lit-element.js';

class myModule extends LitElement{
    constructor(){
        super()
    }
    createRenderRoot() {
        return this;
    }
    render(){
        return html`
<div class="jumbotron">
    <h1>This LitElement component uses <a href="https://github.com/pikapkg/web">pika-web</a> to process LitElement deps and expose them as proper ES module</h1>
    <p class="lead">The preparation step is required only once during installation phase, not every build.</p>
    <p>
        <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Click me (Bootstrap works without Shadow DOM)
        </a>
    </p>
    <div class="collapse" id="collapseExample">
        <div class="card card-body">
            <img src="https://static.boredpanda.com/blog/wp-content/uploads/2017/07/jokes-about-italians-1-5976f6b7b5d68__700.jpg"  width="700" height="500">
        </div>
    </div>
</div>`;
    }

}
customElements.define('my-module', myModule)