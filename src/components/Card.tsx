interface CardContent {
  id: number;
  img?: string;
  title?: string;
  description?: string;
  tags?: string[];
}

const Card: React.FC<{ content: CardContent }> = ({ content }) => {
  const { title, img, description, tags } = content;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Image Section */}
      <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        {img ? (
          <img
            src={img}
            alt={title || "Card image"}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
            <svg
              className="w-12 h-12 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm font-medium">No Image</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
            {title}
          </h3>
        )}

        {description && (
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
            {description}
          </p>
        )}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;