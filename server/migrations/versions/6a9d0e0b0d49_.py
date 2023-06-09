"""empty message

Revision ID: 6a9d0e0b0d49
Revises: b18e244fe3cb
Create Date: 2023-04-24 12:42:44.244454

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6a9d0e0b0d49'
down_revision = 'b18e244fe3cb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('booking', sa.Column('ticket_type', sa.String(length=255), nullable=False))
    op.add_column('booking', sa.Column('ticket_id', sa.Integer(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('booking', 'ticket_id')
    op.drop_column('booking', 'ticket_type')
    # ### end Alembic commands ###