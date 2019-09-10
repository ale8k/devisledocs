export interface ITutorial {
    tutorialName: String;
    sections: Array<ISection>;
}

interface ISection {
    sectionName: String;
    sectionDetails: Array<IDetails>;
}

interface IDetails {
    detailHeader: String;
    detailText: String;
}
