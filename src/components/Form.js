import React from 'react';

import Field from './Field';
import { Column } from '../layout';
import { useForm } from '../providers/FormProvider';

const Form = ({ fields, sx }) => {
    const { isCreatingForm } = useForm();

    return <Column sx={{ opacity: isCreatingForm ? '0.15' : '1', overflow: 'auto', width: '100%', ...sx }}>
        {fields?.map((field, index) =>
            <Field {...field} key={index} index={index} sx={{ pointerEvents: isCreatingForm ? 'none' : 'initial' }} />
        )
        }
    </Column>;
}

export default Form;