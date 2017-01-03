vimfx.set('hints.chars', '1234qwerasdfgzxcvb')

let map = (shortcuts, command, custom=false) => {
    vimfx.set(`${custom ? 'custom.' : ''}mode.normal.${command}`, shortcuts)
}

function disable_cmd ( cmd )	{
    map("", cmd);
}

//disable a-prefixed cmds
//todo write map_force to auto unbind conflicts
[
    "reload_all",
    "reload_all_force",
    "stop_all",
    "stop",
    "find_highlight_all", 
    "scroll_up", 
    "scroll_down",
    "scroll_page_down",
    "scroll_page_up",
    "paste_and_go",
    "paste_and_go_in_tab"
].map(disable_cmd);



map('a', 'scroll_to_left')
map('s', 'scroll_to_right')
map('d', 'scroll_half_page_down')
map('w', 'scroll_half_page_up')

map('A', 'scroll_left')
map('S', 'scroll_right')

map('p', 'tab_toggle_pinned')


map('f', 'follow')
map('q', 'follow_in_tab')
map('z', 'follow_multiple')
map('.', 'scroll_to_bottom')
map(',', 'scroll_to_top')

map('<force><a-f1>', 'history_back')
map('<force><a-f2>', 'history_forward')
map('t', 'tab_new')

map('<force><f4>', 'tab_close')
map('<force><s-f4>', 'tab_restore')

map('<force><f1>', 'tab_select_previous')
map('<force><f2>', 'tab_select_next')

map('<force><s-f1>', 'tab_move_backward')
map('<force><s-f2>', 'tab_move_forward')

// https://github.com/akhodakivskiy/VimFx/wiki/Custom-Commands
vimfx.addCommand({
    name: 'noscript_click_toolbar_button',
    description: 'NoScript',
}, ({vim}) => {
    vim.window.document.getElementById('noscript-tbb').click()
})

map('`', 'noscript_click_toolbar_button', true)
