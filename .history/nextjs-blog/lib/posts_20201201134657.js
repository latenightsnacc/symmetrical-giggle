import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        //Remove ".md" from filename to get id
        const id = fileName.replace(/\.md$/,'')

        const ful
    }
}