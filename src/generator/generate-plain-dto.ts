import type { TemplateHelpers } from './template-helpers';
import type { EntityParams } from './types';

interface GenerateEntityParam extends EntityParams {
  templateHelpers: TemplateHelpers;
}
export const generatePlainDto = ({
  model,
  fields,
  imports,
  apiExtraModels,
  templateHelpers: t,
}: GenerateEntityParam) => `
${t.importStatements(imports)}

${t.if(apiExtraModels.length, t.apiExtraModels(apiExtraModels))}
export ${t.config.outputType} ${t.plainDtoName(model.name)} {
  constructor(partial: Partial<${t.plainDtoName(model.name)}>) {
    Object.assign(this, partial);
  }

  ${t.fieldsToEntityProps(fields)}
}
`;
