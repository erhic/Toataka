import { createContext, useState } from "react";

const FormContext = createContext()

export const FormProvider = ({ children }) => {
  const [service, setService] = useState('')
  const [wastetype, setWasteType] = useState('')
  const [quantity, setQuantity] = useState('')
  const [packagetype, setPackageType] = useState('')
  const [phoneno, setPhoneNo] = useState('')
  const [location, setLocation] = useState('')
  const [street, setStreet] = useState('')


  return (
    <FormContext.Provider
      value={{
        service,
        setService,
        wastetype,
        setWasteType,
        quantity,
        setQuantity,
        packagetype,
        setPackageType,
        phoneno,
        setPhoneNo,
        location,
        setLocation,
        street,
        setStreet,
      }}>
      {children}
    </FormContext.Provider>
  )
}

export default FormContext

