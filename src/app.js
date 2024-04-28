function Link(label, link) {
    return html`
        <p>➔ <a href="${link}" target="__blank">${label}</a></p>
    `
}

function App() {
    this.counter = 0

    return html`
        <div class="space-y-4">
            <h1>Hi, I'm Flux.</h1>
            <p>In my spare time, I develop useless things on the internet.</p>

            <button on:click=${() => { this.counter++ } } class="w-full">
                ${use(this.counter)} Click${
                    use(this.counter, count => 
                        count == 1
                        ? ""
                        : "s"
                    )
                }
            </button>

            <div class="card p-4 space-y-1">
                <h3 class="mb-3 font-bold">About Me</h3>
                <p><b>Gender:</b> Male (cisgender).</p>
                <p><b>Pronouns:</b> Take a guess. (He/Him)</p>
                <p>Muslim high schooler with a passion for coding. :)</p>
            </div>

            <div class="card p-4 space-y-1">
                <h3 class="font-bold mb-3">Other Facts</h3>
                <p>This site uses dreamland.js.</p>
                <p>My favorite colors are black, blue and red.</p>
                <p>The style of this site is inspired by shadcn.</p>
            </div>

            <div class="card p-4 space-y-1">
                <h3 class="mb-3 font-bold">Links</h3>
                ${Link("GitHub", "https://github.com/LolzTheDev")}
                ${Link("Discord", "https://discord.com/users/1073074410187141121")}
            </div>
        </div>
    `
}