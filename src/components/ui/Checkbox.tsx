import { useState, useEffect, useRef } from "react";

type Status = "notCompleted" | "loading" | "completed";

export const Checkbox = ({ checked, isChecking, onChange }: { checked: boolean, isChecking: boolean, onChange: React.ChangeEventHandler<HTMLInputElement> }) => {
    const [status, setStatus] = useState<Status>("notCompleted");

    const handleClick = () => {
        // if(isChecking) {
        //     setStatus("loading");
        // }
        // if (status === "notCompleted") {
        //     // setTimeout(() => {
        //         setStatus("completed");
        //     // }, 100);
        // } else if (status === "completed") {
        //     setStatus("loading");
        //         setTimeout(() => {
        //             setStatus("notCompleted");
        //         }, 100);
        // }
        checkBoxRef.current?.click();
    };

    const checkBoxRef = useRef<HTMLInputElement>(null);


    useEffect(() => {
        console.log(isChecking)
        if(isChecking) {
            setStatus("loading");
        }
        if(isChecking === false) {
            if (status === "notCompleted") {
                // setTimeout(() => {
                    setStatus("completed");
                // }, 100);
            } if (status === "completed") {
                    // setTimeout(() => {
                        setStatus("notCompleted");
                    // }, 100);
            }
        }
    }, [isChecking])

    return (
        <label htmlFor="step-check-box">
            <button className="checkbox-button" onClick={handleClick}>
                <input
                    ref={checkBoxRef}
                    type="checkbox"
                    checked={status === 'completed'}
                    readOnly
                    onChange={onChange}
                    // {...props}
                />

                {((status === "notCompleted") && checked === false) && (
                    <svg
                        id="not-completed-icon"
                        className="not-completed-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="#8A8A8A"
                            strokeWidth="2.08333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray="5 5"
                        />
                    </svg>
                )}

                {status === "loading" && (
                    <svg
                        id="loading-spinner-icon"
                        className="loading-spinner-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2"
                            stroke="#1C181D"
                            strokeWidth="2.08333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}

                {status === "completed" && (
                    <svg
                        id="completed-icon"
                        className="completed-icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="12" cy="12" r="10" fill="#303030"></circle>
                        <path
                            d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
                            fill="#fff"
                        ></path>
                    </svg>
                )}
            </button>
        </label>
    );
};
