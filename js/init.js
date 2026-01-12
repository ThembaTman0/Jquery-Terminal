$(document).ready(function () {
    $('#terminal').terminal(commands, {
        greetings: [
            "[[;#79c0ff;]╭─────────────────────────────────────────╮]",
            "[[;#79c0ff;]│]  Welcome to Themba's Dev Terminal  [[;#79c0ff;]│]",
            "[[;#79c0ff;]╰─────────────────────────────────────────╯]",
            "",
            "[[;#8b949e;]Warp-inspired terminal interface]",
            "[[;#8b949e;]Type] [[;#58a6ff;]help] [[;#8b949e;]to get started]",
            "",
            "[[;#8b949e;]💡 Press TAB for auto-completion]",
            ""
        ].join("\n"),
        prompt: '[[;#3fb950;]❯] ',
        height: '100%',
        checkArity: false,
        completion: function(string, callback) {
            // Get all available commands
            const allCommands = Object.keys(commands);
            
            // For 'skills' command, add category completions
            if (string.startsWith('skills ')) {
                const categories = Object.keys(portfolio.skills);
                callback(categories);
                return;
            }
            
            // For 'project' command, add project name completions
            if (string.startsWith('project ')) {
                const projectNames = portfolio.projects.map(p => 
                    p.name.toLowerCase().replace(/\s+/g, '-')
                );
                callback(projectNames);
                return;
            }
            
            // Default: complete command names
            callback(allCommands);
        },
        onInit: function() {
            this.echo("[[;#3fb950;]✓] Terminal ready - Tab completion enabled");
            this.echo("");
        }
    });
});