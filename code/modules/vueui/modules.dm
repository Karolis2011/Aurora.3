// A minimal wraper aroud global UI state. Meant to be direct substitue to NanoUI modules

/datum/vueui_module
    var/datum/host        // Host object that hosts this object

/datum/vueui_module/New(var/datum/host)
    . = ..()
    src.host = host

/datum/vueui_module/ui_host()
    return host ? host.ui_host() : ..()