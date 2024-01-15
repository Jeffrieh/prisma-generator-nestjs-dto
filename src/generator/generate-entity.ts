import type { TemplateHelpers } from './template-helpers';
import type { EntityParams } from './types';

interface GenerateEntityParam extends EntityParams {
  templateHelpers: TemplateHelpers;
}
export const generateEntity = ({
  model,
  fields,
  imports,

  apiExtraModels,
  templateHelpers: t,
}: GenerateEntityParam) => `
${t.importStatements(imports)}

${t.if(apiExtraModels.length, t.apiExtraModels(apiExtraModels))}
export ${t.config.outputType} ${t.entityName(model.name)} {
  constructor(partial: Partial<${t.entityName(model.name)}>) {
    Object.assign(this, partial);
  }
  ${t.fieldsToEntityProps(fields)}
}
`;
