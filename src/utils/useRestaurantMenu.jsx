import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResinfo] = useState(null);
    const id = useParams().resId;
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        
        const categories = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) => c?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
        setResinfo(categories);
    };

    return resInfo;
};

export default useRestaurantMenu;