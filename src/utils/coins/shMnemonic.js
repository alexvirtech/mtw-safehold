export const createMnemonic = () => {
    if (window.generateMnemonic) {
        return window.generateMnemonic()
    }
}