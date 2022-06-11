export type ValidationRules = {
    heading: {
        maxLength: number,
    },
    preamble: {
        maxLength: number
    }
    author: {
        name: {
            maxLength: number
        }
    }
}

export const validationRules:ValidationRules = {
    heading: {
        maxLength: 50,
    },
    preamble: {
        maxLength: 250
    },
    author: {
        name: {
            maxLength: 40
        }
    }

}