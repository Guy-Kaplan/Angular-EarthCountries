
export class Country {

    public constructor(
        public name: string,
        public nativeName: string,
        public capital: string,
        public population: number,
        public flag: string, // image
        public region: string,
        public subregion: string,
        public area: number,
        public gini: number,
        public numericCode: number, // Example: 004
        public alpha2Code: string, // 2 letters code (example: IL)
        public alpha3Code: string, // 3 letters code (example: ISR)
        public topLevelDomain: string, // Domain (example: .il)
        public callingCodes: string, // Calling code(s) (example: 972)
        public timezones: string, // Time zone(s) (example: UTC+04:30)

    ) { }

}