import { defineEventHandler, getQuery, sendStream } from 'h3';

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const fileId = query.id as string;

    if (!fileId) {
        throw createError({
            statusCode: 400,
            statusMessage: 'File ID is required',
        });
    }

    // رابط التحميل المباشر من Google Drive
    const googleDriveUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    try {
        const response = await fetch(googleDriveUrl);

        if (!response.ok) {
            throw createError({
                statusCode: response.status,
                statusMessage: 'Failed to fetch PDF from Google Drive',
            });
        }

        // إعداد الترويسات المناسبة
        setResponseHeader(event, 'Content-Type', 'application/pdf');
        setResponseHeader(event, 'Content-Disposition', 'inline; filename="lesson.pdf"');

        // إرسال الملف كـ Stream
        return sendStream(event, response.body as any);
    } catch (error) {
        console.error('Error fetching PDF:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
        });
    }
});
