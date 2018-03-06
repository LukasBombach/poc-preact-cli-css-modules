import articleJson from './article/5a93e0723195eb0001099411.json';

export function getArticle(id) {
  return Promise.resolve(articleJson)
}