import { create } from "zustand";

export const SaleTypes = ["SALE", "RENT"]

export const features = create((set) => {
    return {
        featuresData: {},
        setFeaturesData: (field, value) => set(state => (
            {
                featuresData: {
                    ...state.featuresData,
                    [field]: value
                }
            }
        )),
        resetFeatures: () => set({})
    }
})

export const additionalStore = create((set) => {
    return {
        additionalData: {
            propertyId: "",
            label: "",
            material: "",
            beds: 0,
            baths: 0,
            garages: 0,
            garageSize: 0,
            year_build: 2025,
            homeArea: 1200,
            lotDimensions: "",
            lotArea: 0,
            buildTypeId: ""
        },
        setAdditionalData: (field, value) => set(state => (
            {
                additionalData: {
                    ...state.additionalData,
                    [field]: value
                }
            }
        )),
        resetAdditionalData: () => set({
            additionalData: {
                propertyId: "",
                label: "",
                material: "",
                beds: 0,
                baths: 0,
                garages: 0,
                garageSize: 0,
                year_build: 2025,
                homeArea: 1200,
                lotDimensions: "",
                lotArea: 0,
                buildTypeId: ""
            }
        })
    }
})

export const PropertyStore = create((set) => {
    return {
        propertyData: {
            title: "",
            description: "",
            price: 0,
            discount: 0,
            locationUrl: "",
            address: "",
            status: SaleTypes[0],
            isSale: true,
            categoryId: "",
            ownerId: "",
        },
        setPropertyData: (field, value) => set(state => ({
            propertyData: {
                ...state.propertyData,
                [field]: value
            }
        })),
        resetPropertyData: () => set({
            propertyData: {
                title: "",
                description: "",
                price: 0,
                discount: 0,
                locationUrl: "",
                address: "",
                status: SaleTypes[0],
                isSale: true,
                categoryId: "",
                ownerId: "",
            }
        })
    }
})