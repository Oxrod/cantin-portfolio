const fs = require('fs');
import matter from 'gray-matter';
import path, { join } from 'path';

const imagesDirectory = join(process.cwd(), 'public/images/gallery');
const assetsDirectory = '/public/assets/gallery';

export function getImagesSlugs() {
    return fs.readdirSync(imagesDirectory);
}

export function getImagesByCategory(category) {
    const images = [];

    const imagesSlugs = getImagesSlugs();
    imagesSlugs.map((imageSlug) => {
        const realSlug = imageSlug.replace(/\.md$/, '');
        const fullPath = join(imagesDirectory, `${realSlug}.md`);
        const mdContent = fs.readFileSync(fullPath, 'utf-8');
        const { data } = matter(mdContent);

        if (data.category == category) {
            images.push(data.image);
        }
    })

    return images;
}