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
    "find_highlight_all", 
    "scroll_up", 
    "scroll_down"
].map(disable_cmd);



map('a', 'scroll_to_left')
map('s', 'scroll_to_right')
map('d', 'scroll_half_page_down')
map('w', 'scroll_half_page_up')

map('A', 'scroll_left')
map('S', 'scroll_right')


map('f', 'follow')
map('q', 'follow_in_tab')
map('z', 'follow_multiple')
map('.', 'scroll_to_bottom')
map(',', 'scroll_to_top')

map('<a-f1>', 'history_back')
map('<a-f2>', 'history_forward')
map('t', 'tab_new')

map('<f1>', 'tab_select_previous')
map('<f2>', 'tab_select_next')
map('<f4>', 'tab_close')
map('<s-f4>', 'tab_restore')
