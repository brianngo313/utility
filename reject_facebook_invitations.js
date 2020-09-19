function rejectInvitation(invitation) {
    invitation.click()
    setTimeout(() => clickRejectButton(), 250)
    setTimeout(() => clickConfirmButton(), 500)
}

function clickRejectButton() {
    let rejectButtonClass = "hu5pjgll m6k467ps sp_3z2ENmpFncK_2x sx_b8ccc8"
    let rejectButton = Array.from(document.getElementsByClassName(rejectButtonClass))[0]
    rejectButton.click()
}

function clickConfirmButton() {
    let confirmButtonClass = "d2edcug0 hpfvmrgz qv66sw1b c1et5uql oi732d6d ik7dh3pa fgxwclzu a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb iv3no6db jq4qci2q a3bd9o3v lrazzd5p q66pz984"
    let confirmButton = Array.from(document.getElementsByClassName(confirmButtonClass))[1]
    confirmButton.click()
}

let otherButtonClass = "oajrlxb2 tdjehn4e gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys hv4rvrfc qt6c0cv9 dati1w0a i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329"
let otherButtons = Array.from(document.getElementsByClassName(otherButtonClass))

let time = 0
otherButtons.forEach(invitation => {
    time = time + 1000
    setTimeout(() => rejectInvitation(invitation), time)
})
