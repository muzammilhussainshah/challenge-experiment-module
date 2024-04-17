
export const handleGenerate = (
    addIteration,
    setgenerateOne,
    setaddIteration) => {
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

export const handleCancel = (cancelProps) => {
    const { experimentalModules,
        setIsOpen,
        setaddIteration,
        setmoduleName } = cancelProps

    if (experimentalModules.length == 0) setIsOpen(false)
    else setaddIteration(false)
    setmoduleName('')
}

export const handleInputChange = (event, setmoduleName) => {
    setmoduleName(event.target.value);
};

export const handleDone = (commonLogicProps) => {
    const { experimentalModules, value, moduleName } = commonLogicProps
    if (value?.length > 0) experimentalModules.push(value)
    else if (moduleName.length > 0) experimentalModules.push(moduleName)
    if (value?.length > 0 || moduleName.length > 0) commonLogic(commonLogicProps)
}

export const commonLogic = (commonLogicProps) => {
    const { experimentalModules,
        setexperimentalModules,
        setmoduleName,
        setgenerateOne,
        callback,
        id,
        setaddIteration,
        createModule } = commonLogicProps

    setexperimentalModules(experimentalModules)
    setmoduleName('')
    setgenerateOne(false)
    if (id) callback({ [id]: experimentalModules })
    else {
        callback({ [Math.random().toString(36).substr(2, 10)]: experimentalModules })
    }
    setaddIteration(false)
    if (createModule) {
        setaddIteration(true)
        setexperimentalModules([])
    }
}
