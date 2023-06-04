import { Checkbox, Input } from "@mui/material";

import CustomSelect from '../components/CustomSelect';
import CustomRadioGroup from "../components/CustomRadioGroup";

export const fieldTypeMap = {
    input: Input,
    checkbox: Checkbox,
    select: CustomSelect,
    radio: CustomRadioGroup
};