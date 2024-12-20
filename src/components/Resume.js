import React from "react";

const Resume = () => {
    const onButtonClick = () => {
        const pdfUrl = "./Magento2-Frontend-Developer-PeeraShaik.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Magento2-Frontend-Developer-PeeraShaik.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <a onClick={onButtonClick} className="link">
                Download - RESUME
            </a>
        </>
    );
};

export default Resume;