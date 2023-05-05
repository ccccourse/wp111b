async function eval(cmd) {
    let args = cmd.split(' ')
    let child = new Deno.Command(args[0], {args:args.slice(1)})
    return await child.spawn().output()
}

while (true) {
    let cmd = prompt("shell>")
    if (cmd == 'exit') break
    await eval(cmd)
}
