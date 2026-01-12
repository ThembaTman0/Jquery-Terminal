const commands = {
    help() {
        this.echo("[[;#79c0ff;]Available Commands:]");
        this.echo("");
        this.echo("  [[;#58a6ff;]whoami]        Display profile information");
        this.echo("  [[;#58a6ff;]skills]        Show skills by category");
        this.echo("  [[;#58a6ff;]experience]    View work experience");
        this.echo("  [[;#58a6ff;]projects]      List all projects");
        this.echo("  [[;#58a6ff;]project]       View specific project details");
        this.echo("  [[;#58a6ff;]contact]       Get contact information");
        this.echo("  [[;#58a6ff;]clear]         Clear terminal screen");
        this.echo("");
        this.echo("[[;#8b949e;]Tip: Use Tab for auto-completion]");
    },

    whoami() {
        const p = portfolio.profile;
        this.echo("[[;#d2a8ff;]╭─ Profile]");
        this.echo(`[[;#8b949e;]│] [[;#79c0ff;]Name:]        ${p.name}`);
        this.echo(`[[;#8b949e;]│] [[;#79c0ff;]Role:]        ${p.title}`);
        this.echo(`[[;#8b949e;]│] [[;#79c0ff;]Experience:]  ${p.experienceYears} years`);
        this.echo("[[;#8b949e;]│]");
        this.echo(`[[;#8b949e;]│] [[;#79c0ff;]Summary:]`);
        this.echo(`[[;#8b949e;]│]   ${p.summary}`);
        this.echo("[[;#8b949e;]╰─]");
    },

    skills(category) {
        if (!category) {
            this.echo("[[;#79c0ff;]Skill Categories:]");
            this.echo("");
            Object.keys(portfolio.skills).forEach(cat => {
                this.echo(`  [[;#58a6ff;]${cat}]`);
            });
            this.echo("");
            this.echo("[[;#8b949e;]Usage: skills <category>]");
            this.echo("[[;#8b949e;]Example: skills languages]");
            return;
        }

        const data = portfolio.skills[category.toLowerCase()];
        if (!data) {
            this.error(`[[;#f85149;]✗ Unknown category: ${category}]`);
            this.echo("[[;#8b949e;]Try: skills (without arguments) to see available categories]");
            return;
        }

        this.echo(`[[;#d2a8ff;]╭─ ${category.toUpperCase()}]`);
        data.forEach(s => this.echo(`[[;#8b949e;]│]  [[;#3fb950;]✓] ${s}`));
        this.echo("[[;#8b949e;]╰─]");
    },

    experience() {
        this.echo("[[;#79c0ff;]Work Experience:]");
        this.echo("");
        portfolio.experience.forEach(exp => {
            this.echo(`[[;#d2a8ff;]╭─ ${exp.company}]`);
            this.echo(`[[;#8b949e;]│] [[;#79c0ff;]${exp.role}]`);
            this.echo(`[[;#8b949e;]│] [[;#8b949e;]${exp.period}]`);
            this.echo("[[;#8b949e;]│]");
            this.echo("[[;#8b949e;]│] [[;#79c0ff;]Highlights:]");
            exp.highlights.forEach(h => this.echo(`[[;#8b949e;]│]   • ${h}`));
            this.echo("[[;#8b949e;]╰─]");
        });
    },

    projects() {
        this.echo("[[;#79c0ff;]Projects:]");
        this.echo("");
        portfolio.projects.forEach((p, i) => {
            this.echo(`  [[;#58a6ff;]${i + 1}.] ${p.name}`);
            this.echo(`     [[;#8b949e;]${p.description}]`);
            this.echo("");
        });
        this.echo("[[;#8b949e;]Usage: project <name>]");
        this.echo("[[;#8b949e;]Example: project accounts]");
    },

    project(...args) {
        if (args.length === 0) {
            this.echo("[[;#f85149;]✗ Please specify a project name]");
            this.echo("");
            this.echo("[[;#8b949e;]Available projects:]");
            portfolio.projects.forEach(p => this.echo(`  • ${p.name}`));
            return;
        }

        const name = args.join(" ").toLowerCase();
        const project = portfolio.projects.find(p =>
            p.name.toLowerCase().includes(name)
        );

        if (!project) {
            this.error(`[[;#f85149;]✗ Project not found: ${name}]`);
            return;
        }

        this.echo(`[[;#d2a8ff;]╭─ ${project.name}]`);
        this.echo(`[[;#8b949e;]│] [[;#79c0ff;]Stack:] ${project.stack.join(", ")}`);
        this.echo("[[;#8b949e;]│]");
        this.echo(`[[;#8b949e;]│] [[;#79c0ff;]Description:]`);
        this.echo(`[[;#8b949e;]│]   ${project.description}`);

        if (project.responsibilities) {
            this.echo("[[;#8b949e;]│]");
            this.echo("[[;#8b949e;]│] [[;#79c0ff;]Key Responsibilities:]");
            project.responsibilities.forEach(r => this.echo(`[[;#8b949e;]│]   • ${r}`));
        }
        
        if (project.github) {
            this.echo("[[;#8b949e;]│]");
            this.echo(`[[;#8b949e;]│] [[;#3fb950;]GitHub:] [[!;;;;${project.github}]${project.github}]`);
        }
        this.echo("[[;#8b949e;]╰─]");
    },

    contact() {
        this.echo("[[;#79c0ff;]Contact Information:]");
        this.echo("");
        this.echo(`  [[;#3fb950;]✓] GitHub:  [[!;;;;${portfolio.contact.github}]${portfolio.contact.github}]`);
        this.echo(`  [[;#3fb950;]✓] Email:   [[!;;;;mailto:${portfolio.contact.email}]${portfolio.contact.email}]`);
        this.echo("");
        this.echo("[[;#8b949e;]Feel free to reach out!]");
    },

    // Easter eggs
    ls() {
        this.echo("[[;#8b949e;]This isn't a real filesystem 😉]");
        this.echo("[[;#8b949e;]Try 'help' to see available commands]");
    },

    cd() {
        this.echo("[[;#8b949e;]Nice try! But there's nowhere to go here.]");
        this.echo("[[;#8b949e;]Type 'help' for available commands]");
    }
};
