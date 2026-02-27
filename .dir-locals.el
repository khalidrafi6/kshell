((nil . (
         (eval .
               (defun kshell/astro-server ()
                 (interactive)
                 (khalid/project-run-async-shell-command "pnpm dev" "*astro-dev*" nil (project-current nil "/home/rafi/kshell/"))))
               
         (khalid/project-commands . (kshell/astro-server))
         
         (eval .
               (khalid/set-project-command-keybindings)))))
