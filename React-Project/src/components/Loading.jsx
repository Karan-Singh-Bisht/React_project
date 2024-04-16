import React from "react";

const Loading = () => {
    return(
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-[120px] h-[120px] border-[16px] border-t-[16px] rounded-full animate-spin border-t-red-400 border-loader-grey-400">

            </div>
        </div>
    )
}

export default Loading;