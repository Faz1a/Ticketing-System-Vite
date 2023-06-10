"""update

Revision ID: db7553bfbe78
Revises: 6a9d0e0b0d49
Create Date: 2023-06-07 15:37:51.902838

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'db7553bfbe78'
down_revision = '6a9d0e0b0d49'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('preplanned_trip', 'booked_seats',
               existing_type=mysql.INTEGER(),
               nullable=False)
    op.drop_column('travel_card', 'end_date')
    op.drop_column('travel_card', 'start_date')
    op.alter_column('user', 'role',
               existing_type=mysql.VARCHAR(length=255),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'role',
               existing_type=mysql.VARCHAR(length=255),
               nullable=True)
    op.add_column('travel_card', sa.Column('start_date', sa.DATE(), nullable=False))
    op.add_column('travel_card', sa.Column('end_date', sa.DATE(), nullable=False))
    op.alter_column('preplanned_trip', 'booked_seats',
               existing_type=mysql.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###