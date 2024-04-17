export const handleGenerate = (addIteration, setgenerateOne, setaddIteration) => {
    if (addIteration) setgenerateOne(true)
    else {
        setaddIteration(true)
        setgenerateOne(true)
    }
}

export const handleReset = (setexperimentalModules, setaddIteration) => {
    setexperimentalModules([])
    setaddIteration(true)
}


export const handleCancel = (experimentalModules, setIsOpen, setaddIteration, setmoduleName) => {
    if (experimentalModules.length == 0) setIsOpen(false)
    else setaddIteration(false)
    setmoduleName('')
}

// export const FOOTERBUTTONWITHOUTITERATION = [{ title: 'Lock', callback: () => setIsLock(true) }, { title: 'Reset', callback: () => handleReset(setexperimentalModules, setaddIteration) }, { title: '+ ADD iteration ', callback: () => setaddIteration(true) }]
