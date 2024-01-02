'use client'
import React, { ReactElement, useState } from 'react'

//This page is to control the Previous and Next Button with MultipleForm 
function useMultiStepForm(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(1);
    const [isLastStep, setIsLastStep] = useState(false);

    function back() {
        setCurrentStepIndex(i => {
            if (i <= 1) return i
            return i - 1
        })

        setIsLastStep(currentStepIndex === steps.length - 2)
    }

    function next() {
        setCurrentStepIndex(i => {
            if (i >= steps.length ) return i
            return i + 1
        })

        setIsLastStep(currentStepIndex === steps.length - 2)
    }

    function goTo(index: number) {
        setCurrentStepIndex(index);``
    }

    //We need to remove 1 from the formCurrentStep as arrays starts at Index 0 but we are simulating Index 1 for the progess bar lowestlevel.
    return {
        currentStepIndex,
        isLastStep,
        formCurrentStep: steps[currentStepIndex-1],
        steps,
        goTo,
        next, 
        back,
    }
}

export default useMultiStepForm