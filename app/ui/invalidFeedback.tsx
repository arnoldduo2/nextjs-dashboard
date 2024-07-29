'use client';
const InvalidFeedback = ({
  feedback,
  fieldId = '',
}: {
  feedback: string;
  fieldId?: string;
}) => {
  return (
    <div id={fieldId} aria-live='polite' aria-atomic='true'>
      <p className='mt-2 text-sm text-red-500'>{feedback}</p>
    </div>
  );
};

export default InvalidFeedback;
