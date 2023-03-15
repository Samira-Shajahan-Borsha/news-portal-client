import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - News Portal`;
    }, [title]);
}

export default useTitle;