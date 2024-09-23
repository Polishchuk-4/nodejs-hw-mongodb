const parseContactType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isContactType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isContactType) return type;
};

const parseIsFavorite = (isFavorite) => {
  const isString = typeof isFavorite === 'string';
  if (!isString) return;

  const parsedIsFavorite = Boolean(isFavorite);
  if (typeof parsedIsFavorite === 'boolean') return isFavorite;

  return;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavorite } = query;

  const parsedGender = parseContactType(contactType);

  const parsedIsFavorite = parseIsFavorite(isFavorite);

  return {
    contactType: parsedGender,
    isFavorite: parsedIsFavorite,
  };
};
