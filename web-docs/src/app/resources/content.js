import { InlineCode } from "@/once-ui/components";

const newsletter = {
    display: true,
    title: <>Subscribe to Hyper Native Ui's Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/akashmondal0/hyper-native-ui',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/akashmondal0/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/akashmondal_1',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:akash2003mondaldcs@gmail.com',
    },
]

const home = {
    label: 'Hyper Native Ui',
    title: `Hyper Native Ui`,
    description: `Cross-Platform Components Library For React Native`,
    headline: <>Cross-platform Components <br /> Library For React Native</>,
    subline: <>
        Beautifully designed components that you can copy and paste into your apps. <InlineCode>Accessible</InlineCode>. Customizable. Open Source
    </>
}

const docs = {
    label: 'Docs',
    title: `Docs`,
    description: `It's a collection of re-usable components that you can copy and paste into your apps.`
}


export { social, newsletter, home, docs };