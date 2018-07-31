
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
        public numericCode: number,
        public alpha3Code: string, // 3 letters code (example: EST)
        public topLevelDomain: string, // Domain (example: .ee)

    ) { }

}