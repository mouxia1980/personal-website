
export interface SchemaObject {
    "@context": string;
    "@type": string;
    [key: string]: any;
}

export function generateOrganizationSchema(
    name: string, url: string, image?: string
): SchemaObject {
    const schema: SchemaObject = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name,
        url,
        logo: image || "/images/factory-panorama.jpg",
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+86-135-5598-5453",
            contactType: "sales",
            availableLanguage: ["Chinese", "English"],
        },
        address: {
            "@type": "PostalAddress",
            streetAddress: "��������˳������ͷ��ҵ԰������·21��",
            addressLocality: "����",
            addressRegion: "����",
            addressCountry: "CN",
        },
        sameAs: ["https://www.zhipack.com"],
    };
    return schema;
}

export function generateServiceSchema(
    name: string, description: string, category: string
): SchemaObject {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceName: name,
        description,
        serviceType: category,
        provider: { "@type": "Organization", name: "�ǰ�װZhiPack" },
        areaServed: { "@type": "Country", name: "�й�" },
    };
}

export function generateProductSchema(
    name: string, description: string, image?: string
): SchemaObject {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name,
        description,
        image: image || "/images/factory-panorama.jpg",
        brand: { "@type": "Brand", name: "�ǰ�װZhiPack" },
        manufacturer: {
            "@type": "Organization", name: "�ǰ�װZhiPack",
            address: { "@type": "PostalAddress", addressLocality: "����", addressRegion: "����", addressCountry: "CN" },
        },
        offers: {
            "@type": "Offer",
            priceCurrency: "CNY",
            availability: "https://schema.org/InStock",
            url: "https://www.zhipack.com/#contact",
        },
    };
}

export function generateFAQSchema(questions: Array<{q: string, a: string}>): SchemaObject {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: questions.map(item => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
    };
}

export function generateBreadcrumbSchema(items: Array<{label: string, url: string}>): SchemaObject {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            item: item.url || "https://www.zhipack.com",
        })),
    };
}

// Homepage FAQ data for injection in page.tsx
export const homepageFAQs = [
    {
        q: "�ǰ�װ��С�����Ƕ��٣�",
        a: "����֧��С����������500�������𶩡��ʺ���С����ҵ������Ʒ�ơ���ҵ��˾�ĸ��Ի���װ����",
    },
    {
        q: "���ư�װ����Ҫ�೤ʱ�䣿",
        a: "��������ͨ��Ϊ3-5�������գ�������������Ϊ7-15�������գ��������͹��ն������������ɼӼ�������",
    },
    {
        q: "�ǰ�װ�ṩ��Щ��װ���ϣ�",
        a: "�����ṩ���ֻ���ֽ��ѡ�񣬰����׿�ֽ��ͭ��ֽ���Ұ�ֽ������ֽ������ֽ�ȡ����в��Ͼ�ͨ��ʳƷ����ҽҩ����֤��",
    },
    {
        q: "��λ�ȡ���ۣ�",
        a: "������ͨ�����·�ʽ��ϵ���ǣ��绰 13555985453��QQ 99589725������ mouxia1980@outlook.com���ṩ��Ʒ�ߴ硢����������Ҫ�󼴿ɿ��ٻ�ñ��ۡ�",
    },
    {
        q: "�ǰ�װ�Ĺ��������",
        a: "���ǵĹ���λ�ڴ�������˳������ͷ��ҵ԰������·21�ţ�֧�ֿͻ�ʵ�ؿ�����鳧��",
    },
];

// Homepage service catalog for schema generation
export const homepageServices = [
    { name: "ҩƷ��װ��", desc: "ҩʳ����ֽ֤�ģ�����GMP��׼", cat: "ҽҩ��װ" },
    { name: "����Ʒ��װ��", desc: "�߶���Ʒ����ƣ�����Ʒ�Ƽ�ֵ", cat: "����ʳƷ" },
    { name: "ʳƷ��װ��", desc: "ʳƷ����ȫ��⣬���ʷ�������", cat: "ʳƷ��װ" },
    { name: "��ױƷ��װ��", desc: "�����̽�UV���գ�Ʒ����������", cat: "��ױ����" },
    { name: "���Ӳ�Ʒ��װ��", desc: "�����ڳ���ƣ�������������", cat: "���ӿƼ�" },
    { name: "��ͯ��߰�װ��", desc: "������īӡˢ��Բ�ǰ�ȫ���", cat: "ĸӤ���" },
    { name: "�������", desc: "������ˮ�������߶�����������ѡ", cat: "�������" },
    { name: "���������", desc: "����ʿ�ѡ��Ʒ��VI��׼�����", cat: "�ܱ�����" },
];
