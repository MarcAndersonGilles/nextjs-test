"use client"
import React, { Fragment, useEffect, useRef, useState } from 'react'

const arrayMonths = [
    { currentMonth: 'Jan', value: 30 },
    { currentMonth: 'Feb', value: 330 },
    { currentMonth: 'Mar', value: 20 },
    { currentMonth: 'Apr', value: 200 },
    { currentMonth: 'May', value: 80 },
    { currentMonth: 'Jun', value: 70 },
    { currentMonth: 'Jul', value: 60 },
    { currentMonth: 'Aug', value: 50 },
    { currentMonth: 'Sep', value: 30 },
    { currentMonth: 'Oct', value: 30 },
    { currentMonth: 'Nov', value: 50 },
    { currentMonth: 'Dec', value: 80 },

]


function ArrayForRatio() {

    const [position, setPosition] = useState(0); // Position initiale
    const [isMouseOnNav, setisMouseOnNav] = useState(false);
    const [scrollSpeedRatio, setScrollSpeedRatio] = useState(0);
    // const [disableScroll, setDisableScroll] = useState(false);
    // const [activeBtn, setActiveBtn] = useState('month');

    //monthly tickets
    const nonZeroMonths = arrayMonths.filter(item => item.value !== 0);
    const totalValuesMonths: number = nonZeroMonths.reduce((acc, item) => acc + item.value, 0);
    const monthsMoy = Math.floor(totalValuesMonths / nonZeroMonths.length);
    const maxMonthValue = Math.max(...nonZeroMonths.map(item => item.value));

    const chartContainerRef = useRef< HTMLDivElement | null>(null)

     // Maximal hieght for bars graph
     const containerHeight = 140;

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        const initialX = e.clientX;
        const containerWidth = (e.target as Element).parentElement?.offsetWidth;
    
        // Use the ref to access the chart container
        const chartContainer = chartContainerRef.current;
    
        const handleMouseMove = (event: MouseEvent) => {
            const movementX = event.clientX - initialX;
            let newPosition = position + movementX;
    
            if (containerWidth !== undefined) {
                const maxPosition = containerWidth - (e.target as HTMLDivElement).offsetWidth;
                newPosition = Math.max(0, Math.min(newPosition, maxPosition));
            }
    
            setPosition(newPosition);
    
            if (chartContainer) {
                if (containerWidth !== undefined) {
                    const maxPosition = containerWidth - (e.target as HTMLDivElement).offsetWidth;
                    const scrollRatio = newPosition / maxPosition;
                    setScrollSpeedRatio(scrollRatio);
                    chartContainer.scrollLeft =
                        scrollRatio * (chartContainer.scrollWidth - chartContainer.clientWidth);
                }
            }
        };
    
        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const navMouseDownDrag = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setisMouseOnNav(true);
        const container = e.currentTarget;
        const containerScrollPosition = container.scrollLeft;
        let startX = e.clientX;
        let cumulativeX = 0;


        const mouseMove = (e: MouseEvent) => {
            const deltaX = e.clientX - startX;
            container.scrollLeft = containerScrollPosition - deltaX + cumulativeX;
            cumulativeX -= deltaX;
            startX = e.clientX;
            console.log(container.scrollLeft)
            if(chartContainerRef.current)
            setPosition(container.scrollLeft);

        };

        const mouseUp = () => {
            setisMouseOnNav(false);
            document.removeEventListener("mousemove", mouseMove);
            document.removeEventListener("mouseup", mouseUp);
        };

        document.addEventListener("mousemove", mouseMove);
        document.addEventListener("mouseup", mouseUp);
    };

  return (

    <div>
    <div className='flex  flex-col max-w-[370px] bg-white p-4 rounded-lg gap-4 border-2  '>

        <div className='flex justify-between items-center'>
            <h2 className='text-figma-neutre-200 font-bold text-xl'>{"dsdfs"}</h2>
            {/* <IconChevronRight className='w-6 h-6' /> */}
        </div>


        <div className='flex  justify-between w-full flex-wrap gap-4'>
            <div className='flex items-center gap-3 relative'>
                <div className='flex relative'>

                </div>
               

            </div>
          

        </div>


        <div className='flex gap-2 mb-5'>
            {/* {buttons.map((button, index) => (
                <button
                    key={index}
                    type='button'
                    className={`flex w-1/3 px-2 py-1.5 text-sm font-medium border-2 rounded-md text-center justify-center ${activeBtn === button.type
                        ? 'border-primary text-primaryBlack bg-[#EFFCFA]'
                        : 'border-[#F4F4F5] text-[#52525B] bg-[#F4F4F5] bg-opacity-50'
                        }`}
                    onClick={() => handleActifBtn(button.type)}
                >
                    {button.label}
                </button>
            ))} */}
        </div>


        {/*Graphic chart */}
        <div className='flex  w-full min-h-[180px]'>
            <div ref={chartContainerRef} className='chart-container  flex  items-end text-black gap-1 overflow-x-scroll relative  w-full '
            onMouseDown={(e) => navMouseDownDrag(e)}
            >


                <div className=' absolute top-10 text-xs font-normal text-[#71717A] z-10  ' style={{ width: '100%', borderBottom: '2px dashed #E4E4E7', margin: '10px 0' }}>
                    Moy.
                    {monthsMoy
                       }</div>

                
                    <>
                        {arrayMonths.map((item, index) => (
                            <Fragment key={index}>
                                <div className='flex flex-col gap-1 group items-center   justify-center'>
                                    <div className={`bg-[#F4F4F5] w-7    h-0    ${item.value > 0 ? "p-2.5 w-7 transition-all " : "p-0"} relative`}
                                        style={
                                            {

                                                height: `${!isNaN(maxMonthValue)
                                                    ? `${item.value !== 0 ? (item.value / maxMonthValue) * containerHeight : 0}px`
                                                    : '0px'
                                                    }`,

                                            }
                                        }></div>
                                    <div className='text-[#71717A] text-xs font-normal text-center'>{item.currentMonth }</div>
                                    <div className={`absolute     bg-opacity-50    opacity-0 ${item.value > 0 ? "group-hover:opacity-100" : ""}  mb-4  text-gray-500`}>{item.value}</div>
                                </div>
                            </Fragment>
                        )
                        )}
                    </>
               
               
              

            </div>
        </div>

        {/* Scrollbar */}
        <div className='bg-[#F4F4F5]  w-[80%] rounded-lg h-1 relative '>
            <div className='w-full'>
                <div className='w-10 h-1 bg-[#D4D4D8] absolute '
                    style={{
                        left: `${position}px`,
                        transition: 'none', // Désactive la transition pour un déplacement fluide
                        cursor: 'grab',
                    }}
                    onMouseDown={handleMouseDown}
                ></div>
            </div>

        </div>

    </div>
</div>
        
  )
}

export default ArrayForRatio