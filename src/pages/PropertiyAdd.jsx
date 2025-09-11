import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import PropertyHead from "../utils/properties-utils/Property-head"
import { Additionals } from "../utils/properties-utils/Property-Additionals"
import MapComponent from "../utils/properties-utils/Property-Map"
import MediaComponent from "../utils/properties-utils/Property-Media"
import Amenities from "../utils/properties-utils/Property-Features"


function PropertiyAdd() {


    return (
        <main className="flex flex-col gap-y-9">
            <PropertyHead />
            <Additionals />
            <MapComponent/>
            <MediaComponent/>
            <Amenities/>
        </main>
    )
}

export default PropertiyAdd