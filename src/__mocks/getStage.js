import articleJson from './article/5a93e0723195eb0001099411.json';

export function getStage(ids) {
  return Promise.resolve(ids.map(id => articleJson))
}